import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endpoint = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) { }

  sendData(name: string, email: string): Observable<NewsletterService> {
    const data = { name, email };
    return this.http.post<NewsletterService>(this.endpoint, data);
  }
}
