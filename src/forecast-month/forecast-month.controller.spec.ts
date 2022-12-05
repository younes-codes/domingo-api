import { Test, TestingModule } from '@nestjs/testing';
import { ForecastMonthController } from './forecast-month.controller';

describe('ForecastMonthController', () => {
  let controller: ForecastMonthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForecastMonthController],
    }).compile();

    controller = module.get<ForecastMonthController>(ForecastMonthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
