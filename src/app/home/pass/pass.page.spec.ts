import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassPage } from './pass.page';

describe('PassPage', () => {
  let component: PassPage;
  let fixture: ComponentFixture<PassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
