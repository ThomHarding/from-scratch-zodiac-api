const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingZodiac = zodiacs.find((zodiac) => zodiac.id === id);
    res.json(matchingZodiac);
  })
    
  .get('/', (req, res) => {
    const zodiacMap = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    res.json(zodiacMap);
  });
