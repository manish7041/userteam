import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnInit,
  DoCheck,
  HostListener,
} from '@angular/core';
import { Users } from '../models/user.model';

@Directive({
  selector: '[appUserHighlited]',
})
export class UserHighlitedDirective implements DoCheck {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() selectedUserList: Users[];
  @Input() user: Users;
  @HostListener('input') onCheck() {
    if (this.selectedUserList) {
      const isUserSelected = this.selectedUserList.some(
        (selectedUser) => selectedUser.id === this.user.id
      );
      if (isUserSelected) {
        this.renderer.addClass(
          this.element.nativeElement,
          'user-card-selected'
        );
        this.element.nativeElement.checked = true;
      } else {
        this.renderer.removeClass(
          this.element.nativeElement,
          'user-card-selected'
        );
        this.element.nativeElement.checked = false;
      }
    }
  }
  ngDoCheck() {
    this.onCheck();
  }
}
