import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a class="btn btn-primary" routerLink="/">Back to home</a>
    </div>
  `,
  styles: `
    .container {
      padding: 96px 16px;
      text-align: center;
    }
    p {
      margin: 12px 0 32px;
      color: var(--text-muted);
    }
  `,
})
export class NotFound {}
