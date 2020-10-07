import {Inject, Injectable, Logger, OnApplicationBootstrap} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {TEXT_LISTENER_SERVICE} from "../constant/text.constants";
import {TextListenerEvent} from "../constant/text-listener.event";
import {TextMessageDto} from "../dto/text-message.dto";

@Injectable()
export class TextService implements OnApplicationBootstrap {
    private readonly logger = new Logger(TextService.name);

    constructor(
        @Inject(TEXT_LISTENER_SERVICE)
        private client: ClientProxy,
    ) {
    }

    getHello(): string {
        this.client.emit(TextListenerEvent.ON_GET_TEXT, {message: 'lol kek'})
        return 'Hello World printed';
    }

    /* async createMessage(message: TextMessageDto){
          const textMessage=await this.create(message);
    }*/

    /*async createDog(dog: DogCreateDto){
        const dog2=await this.dogRepository.create(dog);
        await this.dogRepository.save(dog2);
    }*/

    async onApplicationBootstrap(): Promise<void> {
        await this.client.connect();
        this.logger.log(`Success connect to ${TEXT_LISTENER_SERVICE}`)
    }
}