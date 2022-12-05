import { Module } from '@nestjs/common';
import { ForecastMonthService } from './forecast-month.service';

@Module({
  providers: [ForecastMonthService]
})
export class ForecastMonthModule {}
