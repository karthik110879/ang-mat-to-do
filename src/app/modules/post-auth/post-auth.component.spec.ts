import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAuthComponent } from './post-auth.component';

describe('PostAuthComponent', () => {
  let component: PostAuthComponent;
  let fixture: ComponentFixture<PostAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
