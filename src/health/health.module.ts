import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { PrometheusModule } from '../prometheus/prometheus.module';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule, PrometheusModule],
  controllers: [HealthController],
  providers: [HealthService],
  exports: [HealthService]
})
export class HealthModule {}
