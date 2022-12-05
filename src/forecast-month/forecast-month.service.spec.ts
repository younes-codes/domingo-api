import { Test, TestingModule } from '@nestjs/testing';
import { ForecastMonthService } from './forecast-month.service';

describe('ForecastMonthService', () => {
  let service: ForecastMonthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForecastMonthService],
    }).compile();

    service = module.get<ForecastMonthService>(ForecastMonthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
