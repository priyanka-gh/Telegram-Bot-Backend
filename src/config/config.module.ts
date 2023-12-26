// src/config/config.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigController } from './config.controller';
import { ConfigService } from './config.service';
import {  ConfigSchema } from '../schemas/config.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Config", schema: ConfigSchema }])
  ],
  controllers: [ConfigController],
  providers: [ConfigService],
  exports: [ConfigService]
})
export class ConfigModule {}
