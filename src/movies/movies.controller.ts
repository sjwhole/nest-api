import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { createMovieDto } from './dto/create-movie.dto';
import { updateMovieDto } from './dto/update-movie.dto';
import { Movie } from './schemas/moive.schema';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}
  @Get()
  getAll() {
    return this.movieService.findAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.movieService.findOne(id);
  }

  @Post()
  create(@Body() createMovieDto: createMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateMovieDto: updateMovieDto) {
    return this.movieService.update(id, updateMovieDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.movieService.deleteOne(id);
  }
}
