import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';


@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: RedisClientType;
    constructor() {
    this.client = createClient({
      url: process.env.REDIS_URL ?? 'redis://localhost:6379',
    });

    this.client.on('error', (error) => {
      console.error('Redis Error:', error);
    });
  }

  async onModuleInit() {
    await this.client.connect();
    console.log('Redis connected successfully 🚀');
  }

  async onModuleDestroy() {
    await this.client.quit();
  }

  getClient() {
    return this.client;
  }

  async get(key: string){
    return await this.client.get(key)
  }

  async set(key: string, value: unknown, ttl?: number){

    const serializedValue = JSON.stringify(value)

    if(ttl){
        this.client.set(key, serializedValue,{
         EX: ttl
     })
    }else{
        this.client.set(key, serializedValue)
    }
  }

  async del(key: string){
    await this.client.del(key)
  }



}
