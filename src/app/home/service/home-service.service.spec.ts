/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeServiceService } from './home-service.service';

describe('HomeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeServiceService]
    });
  });

  it('should ...', inject([HomeServiceService], (service: HomeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
