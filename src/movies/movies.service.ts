import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie, MovieDocument } from './schemas/moive.schema';
import { createMovieDto } from './dto/create-movie.dto';
import { updateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }

  async findOne(id: string): Promise<Movie> {
    return await this.movieModel.findById(id).exec();
  }

  async create(createMovieDto: createMovieDto): Promise<Movie> {
    return await new this.movieModel({
      ...createMovieDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateMovieDto: updateMovieDto): Promise<Movie> {
    return await this.movieModel.findByIdAndUpdate(id, updateMovieDto).exec();
  }

  async deleteOne(id: string): Promise<Movie> {
    return await this.movieModel.findByIdAndDelete(id).exec();
  }
}
