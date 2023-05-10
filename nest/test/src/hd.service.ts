import { Injectable } from '@nestjs/common'

@Injectable()
export class HdService {
  hd() {
    return 'hd service method'
  }
}
