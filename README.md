#Famous WebGL Events
> Implementation for showcasing WebGL and DOM events with Famou

[![Build Status](https://travis-ci.org/Famous/engine-seed.svg?branch=master)](https://travis-ci.org/Famous/engine-seed)  [![Dependency Status](https://david-dm.org/famous/engine-seed.svg)](https://david-dm.org/famous/engine-seed) [![devDependency Status](https://david-dm.org/famous/engine-seed/dev-status.svg)](https://david-dm.org/famous/engine-seed#info=devDependencies)

Here's a simple <a href="https://api-te.famo.us/codemanager/v1/containers/69aba046-aa3b-47ca-b111-537b86ce969e/share" target="_blank">demo</a> showcasing an implementation of having WebGL and DOM events working together, with the same API. If you're interested in seeing this particular WebGL eventing model, here's an <a href"https://github.com/FarhadG/webgl-picking" target="_blank">example with raw WebGL</a>.

---

###Demo

The lights are in DOM (HTML elements) and the boxes are WebGL meshes.

Controls:
- `drag`: You can click and drag the lights around.
- `double click`: You can turn the lights on/off by double clicking the lights.
- `click`: You can move the GL boxes around (random) by clicking them.
- `wheel`: You can grow/shink (random) the size of the GL boxes by scrolling (wheel) on them.

Go ahead and give it a try: <a href="https://api-te.famo.us/codemanager/v1/containers/69aba046-aa3b-47ca-b111-537b86ce969e/share" target="_blank">DEMO</a>

---

###Installation

```bash
git clone https://github.com/FarhadG/famous-webgl-events.git
cd famous-webgl-events
# rm -rf .git && git init && git commit -m "Make it so" # optionally reset git history
npm i # install dependencies
```

---

###Development
Run the dev server with ```npm run dev```

Now the dev server should be running on localhost:1618

Run the linters with ```npm run lint```

Run All Tests with ```npm test```

---

###Need help?

Please join us on the "famous-community" slack.

Sign up --> http://slack.famous.org/signup

Join the discussion --> http://slack.famous.org/

There is a bunch of learning material at --> http://famous.org/learn

There are api docs at -->
http://famous.org/docs


Do you think this readme needs work? So do we! Feel free to send a PR!!!

---

###LICENSE

MIT
