import { Test } from '@nestjs/testing';
import { Movie } from './schemas/moive.schema';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { getModelToken } from '@nestjs/mongoose';

const movies: Movie[] = [];

describe('moviesController', () => {
  let moviesService: MoviesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [
        MoviesService,
        {
          provide: getModelToken(Movie.name),
          useFactory: () => {},
        },
      ],
    }).compile();

    moviesService = moduleRef.get<MoviesService>(MoviesService);
  });

  describe('findAll', () => {
    it('should return an array of movies', async () => {
      jest
        .spyOn(moviesService, 'findAll')
        .mockImplementation(() => Promise.resolve(movies));

      const result = await moviesService.findAll();

      expect(result).toBeInstanceOf(Array);
    });
  });
});
