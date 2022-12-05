import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ForecastMonthController } from './forecast-month/forecast-month.controller';
import { ForecastMonthModule } from './forecast-month/forecast-month.module';

@Module({
  imports: [UsersModule, ForecastMonthModule],
  controllers: [AppController, ForecastMonthController],
  providers: [AppService],
})
export class AppModule {}
