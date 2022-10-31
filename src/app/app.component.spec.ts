import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



  it('should toggle the list view', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.showList).toBeTrue();

    spyOn(component, 'toggleList').and.callThrough();
    component.toggleList();

    fixture.detectChanges();

    expect(component.showList).toBeFalse();
    expect(component.toggleList).toHaveBeenCalled();

  });
});
