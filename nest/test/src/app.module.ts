import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HdService } from './hd.service'
import { HdModule } from './hd/hd.module'
import { TestService } from './test/test.service'
import { TestModule } from './test/test.module'

@Module({
  controllers: [AppController],
  providers: [
    AppService,
    HdService,
    {
      provide: 'config',
      useValue: {
        name: 'houdunren',
        author: 'dashu',
      },
    },
    TestService,
  ],
  imports: [HdModule, TestModule],
})
export class AppModule {}
