import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StoreModule } from './store/store.module';
import { TemplateModule } from './template/template.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PrometheusModule } from './prometheus/prometheus.module';
import { HealthModule } from './health/health.module';
import { MetricsModule } from './metrics/metrics.module';
import config from './config/keys';

@Module({
  imports: [
    StoreModule,
    TemplateModule,
    MongooseModule.forRoot(config.mongoURI),
    PrometheusModule,
    HealthModule,
    MetricsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
