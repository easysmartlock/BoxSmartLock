import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EasyPage } from './easy.page';

describe('EasyPage', () => {
  let component: EasyPage;
  let fixture: ComponentFixture<EasyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EasyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
