import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AguardeSenhaComponent } from './aguarde-senha.component';

describe('AguardeSenhaComponent', () => {
  let component: AguardeSenhaComponent;
  let fixture: ComponentFixture<AguardeSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AguardeSenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AguardeSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
