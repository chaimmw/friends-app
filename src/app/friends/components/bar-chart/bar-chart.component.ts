import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { Friend } from 'src/app/models/friend.model';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarChartComponent {

  @Input() set chartData(data: Friend[]) {
    setTimeout(() => {
      this.buildChart(data);
    })
  };

  @ViewChild('barChart') chartContainer: ElementRef;

  svg: any;
  margin = 50;
  width = 750 - (this.margin * 2);
  height = 400 - (this.margin * 2);


  buildChart(data: Friend[]) {
    d3.select(this.chartContainer.nativeElement).select('svg').remove();

    this.svg = d3.select(this.chartContainer.nativeElement)
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");

    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map((d: Friend) => d.name))
    .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    const oldestPerson = data.reduce((curr, oldest) => {
      if (!oldest) {
        return curr;
      } else {
        const currIsHigher = curr.age > oldest.age;

        return currIsHigher ? curr : oldest;
      }
    }, {} as Friend)
    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, oldestPerson.age])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d: Friend) => x(d.name))
    .attr("y", (d: Friend) => y(d.age))
    .attr("width", x.bandwidth())
    .attr("height", (d: Friend) => this.height - y(d.age))
    .attr("fill", "#d04a35");
  }

}
