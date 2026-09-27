---
type: concept
status: seed
created: 2026-07-24
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
description: "Why a local model's folder name can hide which file is loaded, shown by a ten-round voice test that scored one model against itself."
tags:
  - concepts
  - ai
  - audio
  - local-models
  - engineering
source-count: 1
---

# The Same Model Twice

A comparison test can put one AI model on both sides under two different names and score it against itself. On this desk a voice model test ran for two days and ten rounds on the belief that a stronger model was losing to a weaker one, until a read of the configuration file on disk showed that the two were one and the same model, 1.7 billion parameters in size. A model's folder name does not say which file is loaded, so anyone comparing local models can lose days the same way.

## Core takeaways

- A model's name does not show which file is loaded.
- Read the configuration file before the first test round.
- Check the size, the precision and the task it was set.
- A compressed copy of a model can sound like a weaker model.
- A harder task can make the same model look worse.

## What was hidden

The test compared text-to-speech models, programs that turn written text into spoken audio, by listening to their output over ten rounds. The model believed to be the stronger one kept losing. Its files showed the same model as the other side, stored at 4-bit precision and given a harder task. Storing a model at lower precision, called quantization, saves memory and can cost some quality, and the name on the folder said nothing about it.

- Precision: a 4-bit copy can sound worse than the full-size model.
- Task: a harder job makes the same model score lower.
- Version: which trained variant of the model the file holds.

```
label on the folder:   "stronger model"
config.json:           same 1.7B model
                       4-bit precision
                       harder task
```

## The check

A local model ships in a folder with a small text file, usually named config.json, that lists the model's design and size. Reading it takes seconds and settles which model is loaded. A model identity held in memory is a guess until the file is read. On this desk, reading the file first would have saved the ten rounds.

- Open the model's configuration file before any comparison.
- Record size, precision and task beside every result.

