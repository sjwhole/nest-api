import { PartialType } from '@nestjs/mapped-types';
import { createMovieDto } from './create-movie.dto';

export class updateMovieDto extends PartialType(createMovieDto) {}
