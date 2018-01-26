---
layout: post
title: Vim vs. Neovim
---

I just read [this](https://geoff.greer.fm/2015/01/15/why-neovim-is-better-than-vim/) interesting post on the benefits of Neovim over Vim. I thought the author made some good points, but I also lack the perspective of a contributor; I'm only a vim user. I decided to install Neovim (`brew install neovim`) and take a quick look.

Right off the bat, I noticed two things:

1. Neovim is configured to use a bar cursor (`|`) in insert mode, and a block otherwise. This visual indicator makes it really easy to keep in mind what mode you're in. When I tried to add a configuration to my .vimrc, I found that it wasn't easily doable in macOS's Terminal.app. Perhaps there's a way to get it going---I'll have to do some more digging---but I'm not interested in switching to iTerm 2. I like my tmux setup quite a lot, thank you.
2. Neovim was, in a way, painfully slow. Switching out of escape mode took longer than my fingers are used to. I'm wondering if that's expected, or a unique issue. Admittedly, I haven't yet done any serious programming in Neovim. I'm going to give it a shot.

Both programs have the same UI that I know and love. I'm torn whether it's worth switching to something that has been carefully developed under the hood, and may allow for me to contribute to development down the road, or if I should stick to the tried-and-true.
