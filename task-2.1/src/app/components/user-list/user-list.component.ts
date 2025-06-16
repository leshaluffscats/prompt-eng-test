import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private userService = inject(UserService);
  users = this.userService.getUsersSignal();
  selectedUser: User | null = null;
  showModal = false;

  ngOnInit(): void {
    this.userService.getUsers().subscribe();
  }

  onUserClick(user: User): void {
    this.selectedUser = user;
    this.showModal = true;
  }

  onDeleteUser(id: number, event: Event): void {
    event.stopPropagation();
    this.userService.deleteUser(id);
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedUser = null;
  }
} 