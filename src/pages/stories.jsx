import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import thumbnail from "../assets/thumbnail.webp";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import story from "../assets/audio.mp3";

export default function Stories() {
  return (
    <Stack direction="row" gap={10} sx={{ padding: "10px" }}>
      <Box sx={{ width: "70%", maxHeight: "500px", overflow: "scroll" }}>
        <Typography
          variant="h4"
          sx={{ fontFamily: "Protest Riot, sans-serif", color: "#664dd4" }}
        >
          Birdy’s Christmas Puzzles
        </Typography>
        <Typography
          variant="body1"
          sx={{ whiteSpace: "pre-line", color: "#333" }}
        >{`
                It was a chilly evening. Mum had turned down the heating to save money - because these days, the price of everything is so high. Jake was hunched over his desk in his room. He held a hot water bottle against his tummy to keep him from freezing. His homework was sprawled out in front of him. But his m ind was far from the maths problems. He was thinking about their Christmas holiday in Lapland, staying in an igloo hotel, meeting Santa and seeing real-life magical reindeer prancing in the snow. Dad had promised to take the family on this once-in-a-lifetime trip to Santa's homeland. Well he had sort of promised. He said it depended on the money - on him receiving a nice christmas bonus. If the bonus came through, they would be packing their bags for Lapland.
                \nThat little “if” loomed over the plan like a miserly cloud.
                
                \n"Oh please, Santa, give Dad his bonus for Christmas. He’s been a good Dad all year and we'd rather see you in Lapland than down our chimney," murmured Jake.
                
                \nAt that moment, he heard a raspy voice from the direction of the window: “Open up!”
                
                \n"Birdy!" Jake called out. His feathered friend, perched at the window, always brightened his mood. He welcomed Birdy in, who shook off the snow with a dramatic flair.
                
                \n"How's the homework going?" Birdy inquired, casting an eye over the papers.
                
                \n"Stuck," Jake admitted. "Maths isn’t my best subject. How about you, Birdy? Any good with numbers?"
                
                \nBirdy ruffled his feathers proudly. "I might surprise you. Let's see what you've got."
                
                \nJake pointed to the first problem. "Okay, here's one: If Santa’s elves can wrap one parcel in 3o seconds, how long will it take them to wrap 11 parcels?”
                
                \n“A long time. This year the elves have gone on strike for higher wages, so the reindeer will be wrapping the parcels,” said Birdy.
                
                \n“Really? That’s bad news,” replied Jake. “But I can’t write that down as my answer.”
                
                \n“Well, let’s use your little brain, shall we? According to the question, how many parcels can one elf wrap in one minute?”
                
                \n“Er, two!”
                
                \n“So how many can they wrap in 11 minutes?”
                
                \n“22!”
                
                \n“Caw! You’re not so dim after all. What have you got next?”
                
                \n“This one,” said Jake. “If Santa takes 20 minutes to visit 10 chimneys, how many chimneys can he visit in one hour?”
                
                \nBirdy flapped his wings in amazement. “What a silly question? If Santa worked that slowly, he could do deliveries all year round and still only deliver a tiny fraction of the parcels. He does millions of parcels in one minute. Doesn’t your teacher know that?”
                
                \n“My teacher doesn’t know anything much about real life. But what’s the answer?”
                
                \n“Oh well,” said Birdy. “First you have to think - how many minutes in one hour?”
                
                \n“60” replied Jake.
                
                \n“And what’s twenty into 60?”
                
                \n“Errr”
                
                \n“Here’s a clue. It’s the same as 2 into 6.”
                
                \n“I know 3!”
                
                \n“Yes, clever boy. So if he visits 10 chimneys in 20 minutes, he will visit three times as many chimneys in one hour - the old slow coach.”
                
                \n“Oh I know…. The answer is 30!”
                
                \n“Correct!” Said Birdy. “Santa’s much swifter in real life, but it’s the right answer to this silly homework question.”
                
                \nJake filled in the answer. "Thanks, Birdy. Maths is much more fun with you around."
                
                \nBirdy nodded sagely. "Always happy to help.”
                
                \n“Birdy, can you help Dad get his Christmas bonus?”
                
                \n“Naaa sorry. Times are hard. Even my wings can’t make bonuses fly this year,” Birdy replied.
                
                \n“Awwwww! Then we won’t be going to Lapland for our Christmas holiday. We’ll be stuck here in boring old Britain.”
                
                \nLater on, Mum came by to see how Jake was getting on with his homework.
                
                \n“All done!”
                
                \n“Is it? I hope you did it properly. I don’t want your teacher calling me while I’m at work. ” She looked over his answers.
                
                \n“Seems good.”
                
                \n“Birdy helped me!”
                
                \n“Oh did he? Birdy this. Birdy that. You’re always on about Birdy.”
                
                \n“That’s because he’s always right about everything.”
                
                \n“Well you’ve done your homework well, you should be pleased with yourself.”
                
                \n“I am, thanks,” said Jake.
                
                \nAs it turned out, Birdy's economic forecast was spot-on. Dad’s boss wasn’t giving anyone a bonus - instead, he called Dad into his office and told him the good news - he was one of the lucky ones this Christmas because he wasn’t getting the sack. So Dad came home very forlorn, and said:
                
                \n“Bad news kids, we can’t afford to go to Lapland this year I’m afraid. In fact, the way prices are going, Santa will be struggling to buy any presents.”
                
                \n“Your boss is such a Scrouge!” declared Mum.
                
                \n“Don’t blame him. Inflation is the real Scrouge, and not everyone is fortunate enough to be worrying about going on holiday.” said Dad, “So let’s count our blessings that we are all fine.”
                
                \nAnd with that, the family's glistening plans to visit the land of snow and ice melted away.
                
                \n“Never mind. We can still afford to pop in and visit Santa at the Garden Centre, just about….” said Mum.
                
                \nThe garden centre's Christmas display was known for its crooning model reindeer – not quite the magical creatures of Lapland, but at least these ones knew the lyrics to 'Jingle Bells.'
                
                \nBut then Mum had a lightbulb moment – the lottery! She'd read about a mystery £100 million jackpot winner in the UK. "What if Lady Luck smiled at us?" she mused. "I think I remember picking those numbers."
                
                \nJake watched eagerly as she attempted to log into her lottery account. "Now, what's my password?" she muttered, fingers poised over the keyboard. A hint popped up, a throwback to their honeymoon: 'The island of spices.' "Ah, Zanzibar, 2010!" she exclaimed.
                
                \nShe logged in, and held her breath. The numbers loaded on the screen, and Mum's face fell. "Well, two numbers matched. We've won a grand total of £2.50.”
                
                \n"Enough to share a Christmas cracker?” asked Jake.
                
                \nSo it looked like they weren’t going to see Santa and his reindeer in Lapland.
                
                \n“But hang on,” said Mum. “There’s one last chance. I think Dad’s got some Bitcoin stashed away.”
                
                \n“Bitcoin? What’s that?”
                
                \n“It’s like digital money. But I bet he can’t remember the password.”
                
                \nAnd of course she was right. Dad’s memory wasn’t the best!
                \nHe always forgot where he left his phone, his glasses, his woolly hat, “You’ll lose your own head one day,” Mum used to say.
                
                \nBut he got off to a promising start. He remembered that his stash of Bitcoin was on his old laptop. He retrieved it from the attic, and to his surprise, it easily booted up and he could log on. But he couldn’t remember the password to his bitcoin wallet for love or money.
                
                \n“Never mind,” he said. “Bitcoin crashed and it’s probably worth no more than 25 pence.”
                
                \n"But I read in the paper that it’s bouncing back," Mum countered, her optimism undimmed.
                
                \n“Hang on. Here’s a memory jogger,” said Dad.
                
                \nThe hint for his password read: "A number, a spice, and a musical star."
                
                \nMum's eyes lit up with inspiration. "A spice and a musical star... that's Posh Spice from the Spice Girls! And the number? Our wedding year!" Dad nodded, recalling it had something to do with their honeymoon in Zanzibar, but all their attempts to log on were in vain.
                
                \nThat evening, Jake was grappling with Geography, when Birdy dropped by, offering homework help. Jake, however, was preoccupied with a bigger puzzle. He shared the story of Mum's lottery win of £2.50 and Dad's elusive Bitcoin password, hinting it might be related to Mum and Dad's honeymoon in Zanzibar.
                
                \n"Fetch the photo album," Birdy suggested. Jake sneaked downstairs, retrieving the album under the guise of Geography homework research. “Guess what? We’re learning about Zanzibar at school,” he said.
                
                \n“Ah yes,” sighed Mum, remembering her honeymoon.
                
                \nUpstairs, Jake flipped through the pages of Mum and Dad’s honeymoon photo album, with pictures from the East African island of Zanzibar. Birdy perched on the back of his chair and scrutinised the pictures with his beady eyes.
                
                \nOne photo showed Dad, surrounded by mounds of vibrant spices at a local market. His face was scrunched up in surprise, a cloud of bright yellow dust around him after an accidental sneeze.
                
                \n“I know what that yellow spice is!” exclaimed Jake. “Mum likes to chuck it into her stews. It’s called Turmeric and it’s supposed to be ever so good for you.”
                
                \n“You’re right,” said Birdy. “You'll make it as a detective! You’ve solved one of the clues.”
                
                \nAnother snapshot showed the Happy Couple on a traditional dhow sailing boat. Dad, looking like a makeshift sailor, was at the helm with an over-exaggerated expression of concentration. Mum sat nearby, playfully rolling her eyes, as if questioning his navigational skills.
                
                \n“Just Look at your Mum!”cawed Birdy. “Her expression's like, 'Should I swim back to shore?'"
                
                \n“Is it a clue?” asked Jake.
                
                \n“Naaaa. But it is a funny picture.”
                
                \nThen Jake turned over the page. Among the vibrant photos, there was a shot of Mum standing outside the door to their Hotel. And it was no ordinary door! It was a masterpiece, with intricate carvings of vines, lions, and peacocks. Next to it was a brass letter box, which bore the building number 142.
                
                \n“That’s our number!” squarked Birdy.
                
                \n“Yeah!” said Jake. “I see it too. 142 is the number we’re looking for. But what about the musical star?" Jake pondered. “Mum was going on about somebody called Posh Spice who married a footballer.”
                
                \n“Naa,” said Birdy. “Posh Spice isn’t connected to Zanzibar. But there’s a true musical star who is. Freddy Mercury was born there!”
                
                \n“Wow! That’s it!” exclaimed Jake. “Queen is Dad’s favourite band!”
                
                \nSo Jake ran down the stairs declaring, “We’ve got it! We’ve got it! We’ve cracked the password! We’re going to Lapland for Christmas!”
                
                \nIn the living room, the family huddled around the ancient laptop, the photo album opened to the crucial pages. Jake noticed that Dad’s hands trembled slightly as he typed in the password: "142TurmericQueen."
                
                \nThey held their breath as the cursor blinked, waiting for the verdict. But the screen flashed red with a familiar 'Access Denied.' Disappointment washed over them, the solution seemingly just out of reach.
                
                \nThen, Dad's face lit up with a sudden burst of memory. "Hold on!" he exclaimed. "It's not just Queen... it's a specific song. 'Killer Queen' – it was my favourite back in the day!"
                
                \nEnergised by this revelation, Dad swiftly adjusted the password: "142TurmericKillerQueen." They watched, hearts pounding, as the cursor blinked once more. This time, the screen changed, welcoming them into the account.
                
                \nA collective gasp filled the room as they saw the Bitcoin balance. It had indeed rebounded, and then some. There was more than enough money to cover their trip to Lapland!
                
                \nMum jumped up with a whoop whoop of delight, and wrapped her arms around him.
                
                \n“So, Santa’s reindeer.. Here we come!” Dad cheered.
                
                \n“And we don’t mean the carol singing deer at the garden centre,”replied Mum.
                
                \n“And you know who we can thank for cracking the passcode,” proclaimed Jake. “Birdy!”
                
                \n“There we go again,” sighed Mum. “Birdy, Birdy Birdy. Always Birdy. You should give yourself credit Jake. You cracked Dad’s password. Mind you don’t go hacking into any top secret accounts!”
                
                \n“Naaa,” said Jake, “Don’t worry. Birdy wouldn’t let me do anything like that. He just wanted to help us go on holiday for Christmas!”
                \nAnd of course they did spend an amazing Christmas in the land of snow, ice and real life sledge pulling Rudolph. And the best part for Jake was sleeping under the stars in the glass igloo, beneath the Northern skyline. When his family were fast asleep, Jake with his mug of hot chocolate sat up to admire another light show.. the beautiful starry night filled up with an array of the magical colours of Finland. And a familiar outline of a crow flew past.
                \n“Thank you for the best Christmas holiday,Birdy,” whispered Jake before he snuggled into the cosiest blanket ever.
              `}</Typography>
      </Box>
      <Box
        sx={{
          width: "30%",
          borderRadius: "20px",
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#d4c3f2",
          paddingBottom: "20px",
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          flex={1}
          //   paddingBottom={20}
        >
          <img
            src={thumbnail}
            alt=""
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Stack>
        <AudioPlayer
          src={story}
          showFilledVolume
          style={{
            backgroundColor: "#d4c3f2",
            boxShadow: "none",
            color: "#fff",
          }}
        />
      </Box>
    </Stack>
  );
}
