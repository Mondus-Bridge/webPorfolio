# My Experience and AI Tools Help to Create a Mid-Grade Web App

*«Begin Your Fate» that's how my web app is welcoming everyone!*

For years as a QA Engineer and PM, I managed developer pipelines and tested other people's code. But deep down, I felt a constant frustration: I wasn't building real things myself. Despite knowing Agile SDLC and using basic AI prompts, the "dinosaur feeling" never left me. Reading tech books kept my mind busy, but it didn't give me the agency I wanted. I didn't want to just manage products—I wanted to ship one. So, I decided to test a hypothesis: Could I leverage my product background alongside AI tools to build a full-stack, mid-complexity web app from scratch? Here is what I built, how we co-created it, and what I learned along the way.

## First step: Resting

At least 1 month, because human mind need to go out from previous daily loops, thats been repeated by the same way 1000 day in the row. In rest human can abstract and think. Think equal to planning. Self planning its important thing, that many people skipping for different reasons. Without good strategy about future actions and peace in mind - can bring a lot of mess in implementation moment. Combination of abstraction and good planning gives an idea.

## Second step: Try

After resting I had vision to create my App. But I didn't know what AI tool should be used and how to orchestrate it as many bloggers say. Watching of YouTube platform videos didn't bring to me any result. So I decided, that I will try different tools and will choose in the process best one for my requirements. First things was to use local llm. I have RTX 4070 and 16 GB of RAM. I saw, that I can run some llm in Ollama with a heavy quantinaztions. Still worth to try. Found for myself Gemma 4:12b model. It was good to create a lending, but thats it. Also it so slow. Gave up on that idea. Next thing I tried model from Groq. My American friend told me, that he is using Groq. Didn't ask details, because felt uncomfortable of asking. And even asked - I won't understand a thing from his story. So tried gpt-oss-120b with 0.6$ per million output. Not gonna lie, it was insanely fast to create a front and backend, 500 tokens per second, but the quality didn't fit into my development requirements. Than I tried open source AI coding agent: Opencode.

## Third step: Opencode

I did choose this AI agent only because, that I can take any provider AI model and use it. That was a deal breaker moment for me. Other AI agent tools are great and well configured in initial stage, but limited to current provider model only, which means - could be 2-100x times more expensive for my raw idea. Besides, this model are might be not fitting to my orchestrations style. As newbie I wanted to try it for free and later to pay fair price for tokens and have a better model with API managing tool. But there is always catch in a big variety of models in opencode: need to manually and somehow configure it.

## Fourth step: Configuration

Configuration of my project took me a while. The first things was, that I didn't know how to implement orchestration workflow. How tokens limits works and etc. I didn't knew anything. What I knew it was my previous experience, where in development project existed this positions: product manager, qa, fronted and backend engineers. So I tried to make them as agents personalties. It worked well in initial stage. Agents well handling my product owner requirements. I was litterally BOSS who gives the money to my employee for work. It was new feeling to me, but after one week Ive noticed, that my workers are getting slower and demanding for a bigger salary. My startup is getting expensive and taking longer to create a feature or bug fix. As a professional manager, I decided to fire QA-Agent. Left from his work only framework Playwright for other agents for a great browser navigation via CLI or MCP. My project reliefed and it got faster. As boss - highly satisfied, but it didn't long. Now problem its appearing with double force: 1) taking too much time, cause project code its growing and 2) my PM-agent its creating own documentation as required, but my other remaining agents taking this docs seriously and my request to create a feature was never been in first place, cause the single source of truth for this agents was documentation. The machines raised against of own creator! So, without thinking I removed PM-AGENT as well with 90% prd-docs and delegate to write at least a comments in code by front and backend agents by themselves. Backend-agent creating openapi.yaml file and frontend-agent commenting a code with a given logic for DOM element. Its worked.

## Fifth step: My code

My monorepo project has 3 main folders: /backend, /fronted and /docs. Fronted-agent and backend-agent has own skills and [README.MD](http://README.MD) in their working folders. The model of development its DDL, cause to calculate damage its not simple task. It has own engine, rotation, domain mechanic. Static front build after building lives in Vercel and backed and db Im deploying it to VDS manually, because the agents shouldn't know passwords to my server. Of course before each deployment, Im making DB dump and have instant rollback to old backend if it will break. DB its Postgress, web server is Caddy in Docker container, backend is written in GO, previously was Python 3 with FastApi framework, but it was 15 times slower in handling request from my API provider for fetching players data about character. Frontend written in TS and it has React framework and Tailwind for a reason, because I din't want to my AI create own custom stuff, when the component its already exists.

## Step six: Cost

Currently I have 3 source of expenses:

1.  **Time.** Spent 4 weeks to create production ready MVP. Had a good time working with that and devote my passion and determination for to create a product for people
2.  **Cost for tokens.** Tokens cost some money and for project chose Deepseek. It has frontier tier reasoning, coding and orchestration skill.
3.  **Server.** 3 cores and 4 gigs. Cheap and fitting for now.

## Step seven: My project

Right now exists 12 mainstream team comps. Promoting my Web App by optimizing SEO and writing simple posts in Reddit.

More than 300 people are summited thier UIDs.

## Conclusion

This technical stage of modern tools can make a passionate person to become a developer without mastering every tech stack upfront and without spending enormous time to learn all tech stacks for experience only. I used it for coding, but there is many other fields. It's not developed only by AI. It was a collaboration between me and AI to create a mid-complexity web app. Similar apps exists in internet and they're quite popular among players Genshin, but I don't like them and I created my own version of it, because I couldn't track team DPS, rotation and etc. My app is much more flexible and will be improved furthermore. I'll take reasonable criticism and make it better as is should be.

I'm quite glad, that my knowledge about product development wasn't so bad. Now - all my fears are gone. I am grateful to all human intelligence for creating such a good tool.

---

*Read the original article on LinkedIn: [My experience and AI tools help to create a mid-grade Web App](https://www.linkedin.com/pulse/my-experience-ai-tools-help-create-mid-grade-web-app-ilnur-gabitov-sbpef/)*