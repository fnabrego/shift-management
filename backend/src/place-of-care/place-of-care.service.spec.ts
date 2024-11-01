import { Test, TestingModule } from '@nestjs/testing';
import { PlaceOfCareService } from './place-of-care.service';

describe('PlaceOfCareService', () => {
  let service: PlaceOfCareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaceOfCareService],
    }).compile();

    service = module.get<PlaceOfCareService>(PlaceOfCareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
