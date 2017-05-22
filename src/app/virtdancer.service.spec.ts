import { TestBed, inject } from '@angular/core/testing';

import { VirtdancerService } from './virtdancer.service';

describe('VirtdancerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VirtdancerService]
    });
  });

  it('should be created', inject([VirtdancerService], (service: VirtdancerService) => {
    expect(service).toBeTruthy();
  }));
});
