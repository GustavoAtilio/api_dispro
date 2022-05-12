import { UsersModule } from './../users.module';


import { UserService } from './../services/user.service';
import { UserController } from './user.controller';
import { Test } from '@nestjs/testing';



describe('UserController', () => {
    let userController: UserController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [UserController],
        imports:[UsersModule],
        providers: [
            {
                provide: UserService,
                useValue: {
                    createUserService: jest.fn(),
                    loginUserService: jest.fn(),
                },
            },
        ],
      }).compile();
      userController = moduleRef.get<UserController>(UserController);
    
  });

  it('should be defined',()=> {
      expect(userController).toBeDefined();
  })

 
});