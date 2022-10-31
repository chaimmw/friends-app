import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Friend } from 'src/app/models/friend.model';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieChartComponent  {

  @Input() set chartData(data: Friend[]) {
    setTimeout(() => {
      this.buildChart(data);
    })
  };

  @ViewChild('pieChart') chartContainer: ElementRef;

  svg: any;
  margin = 50;
  width = 750;
  height = 600;
  // The radius of the pie chart is half the smallest side
  radius = Math.min(this.width, this.height) / 2 - this.margin;
  colors: any;


  buildChart(data: Friend[]) {

    this.svg = d3.select(this.chartContainer.nativeElement)
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );

    this.colors = d3.scaleOrdinal()
    .domain(data.map(d => d.weight.toString()))
    .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);

    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.weight));

    // Build the pie chart
    this.svg
    .selectAll('pieces')
    .data(pie(data))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius)
    )
    .attr('fill', (d: Friend, i: number) => (this.colors(i)))
    .attr("stroke", "#121926")
    .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3.arc()
    .innerRadius(100)
    .outerRadius(this.radius);

    this.svg
    .selectAll('pieces')
    .data(pie(data))
    .enter()
    .append('text')
    .text((d: any) => d.data.name)
    .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 15);
  }

}
