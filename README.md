# my-website

My personal website, available here : https://marguerit.at/.

I made the first version of this project in 2017, using HTML and CSS with __Water.css__ and __Netlify__ as plateform.

For this second version, I used __NextJS__. With __Vercel__ as plateform and __Cloudfare__ as DNS.

## Built With

- NextJS
- Vercel
- TailwindCSS
- FlyonUI

## How to use it

### Installation

```
git clone https://github.com/Gyskard/my-website
npm install
npx vercel env pull .env.development.local
```

Add a `RESUME_URL` key inside the file `.env.development.local`.

```
npm run dev
```

### Code quality

```
npm run lint
npm run format
```

### Test

```
npm run test
```

