import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { MongooseModule } from '@nestjs/mongoose';
//import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://Pradeep:Hacker8096@cluster0.2ixgm.mongodb.net/NodeTest?retryWrites=true&w=majority"),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
