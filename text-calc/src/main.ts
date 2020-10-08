import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {Logger} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.REDIS,
        options: {
            url: 'redis://localhost:7878'
        }
    });
    const logger = new Logger(bootstrap.name);
    app.listen(() => logger.log('Microservice REDIS is connecting'));
}

bootstrap();