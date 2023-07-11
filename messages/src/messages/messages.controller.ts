import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get('/')
    getMessages() {
        return 'Hi I am the messages'
    }
}
