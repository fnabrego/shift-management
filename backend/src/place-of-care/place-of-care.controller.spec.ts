import { Test, TestingModule } from '@nestjs/testing';
import { PlaceOfCareController } from './place-of-care.controller';

describe('PlaceOfCareController', () => {
  let controller: PlaceOfCareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaceOfCareController],
    }).compile();

    controller = module.get<PlaceOfCareController>(PlaceOfCareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
