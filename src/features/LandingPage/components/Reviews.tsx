import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@app/components/base/carousel'
import { Card, CardContent } from '@app/components/base/card'
import { ColonIcon } from 'public/icons';

const Reviews = () => {

  const data = [
    { name: 'Stephanie Moore', 
      review: 'VirtuoCard NFC has made payments a breeze for our business. With seamless integration and swift transactions, it has enhanced both user experience and operational efficienc', 
      stars: 5 
    },
    { name: 'Micheal Coker',
      review: `Using VirtuoCard NFC for attendance tracking has been a game-changer. It's simple, saves time, and has streamlined our processes effectively.`, 
      stars: 3 
    },
    { name: 'Paul Bettany', 
      review: 'VirtuoCard NFC has made payments a breeze for our business. With seamless integration and swift transactions, it has enhanced both user experience and operational efficienc', 
      stars: 4 
    },
    { name: 'Paul Bettany', 
    review: 'VirtuoCard NFC has made payments a breeze for our business. With seamless integration and swift transactions, it has enhanced both user experience and operational efficienc', 
    stars: 4 
  },
  ];

  return (
    <div className='w-full bg-gradient-to-l from-[bg-gradient-to-l from-[#FE8C00] to-[#FF6B00] py-10 text-white justify-center items-center flex flex-col gap-8'>
      <div className='text-xl md:text-3xl font-semibold'>
        <span>What people are saying about us</span>
      </div>

      <Carousel className="w-[95%] md:w-[85%]">

        <CarouselContent className='w-full md:w-[50%] h-[320px]'>
          {data.map((item, index) => (
            <CarouselItem key={index} className=''>
              <div className="p-1">
                <Card className='w-full h-full border-none flex flex-col gap-2'>
                  <CardContent className="shadow-sm shadow-orange-600 flex w-full h-[200px] items-center justify-center p-6">
                    <div className='flex flex-col gap-6'>
                      <ColonIcon className='w-10 md:w-20'/>
                      <p className='text-[.8em] md:text-[1.2em]'>
                        {item.review}
                      </p>
                    </div>
                  </CardContent>

                  <div className='px-6'>
                    <h3>{item.name}</h3>
                    <div>
                      {[...Array(item.stars)].map((_, starIndex) => (
                        <span key={starIndex} className="text-white">&#9733;</span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className='flex gap-2 justify-end items-center'>
          <CarouselPrevious className='w-14 h-14'/>
          <CarouselNext className='w-14 h-14'/>
        </div>
      </Carousel>
    </div>
  )
}

export default Reviews