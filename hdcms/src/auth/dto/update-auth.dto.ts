import { PartialType } from '@nestjs/mapped-types';
import { RegisterDto } from './resister.dto';

export class UpdateAuthDto extends PartialType(RegisterDto) {}
