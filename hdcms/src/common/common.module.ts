import { Global, Module } from '@nestjs/common'
import { ConfigService } from './config.service'
import { ConfigModule as BaseMoudule } from '@nestjs/config'
import config from '../config'

@Global()
@Module({
  imports: [
    BaseMoudule.forRoot({
      load: [config],
    }),
  ],
  controllers: [],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class CommonModule {}
