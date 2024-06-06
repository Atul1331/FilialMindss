import Score from '../models/scoreModel.js'

export const scoreGet = async (req, res) => {
  try {
    const scores = await Score.find();
    console.log(scores)
    res.status(200).json(scores);
  } catch (error) {
    console.error("Error in scoreGet controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const scorePost = async (req, res) => {
  try {
    const { name, closenessScore, conflictsScore } = req.body
    console.log(name)
    console.log(closenessScore)
    console.log(conflictsScore)

    // Check if a score with the given name exists
    let score = await Score.findOne({ name })

    if (score) {
      // Update the existing score
      score.closenessScore = closenessScore
      score.conflictsScore = conflictsScore

      await score.save()

      return res.status(200).json({
        _id: score._id,
        name: score.name,
        closenessScore: score.closenessScore,
        conflictsScore: score.conflictsScore
      })
    } else {
      // Create a new score entry
      const newScore = new Score({
        name,
        closenessScore,
        conflictsScore
      })

      if (newScore) {
        await newScore.save()

        return res.status(201).json({
          _id: newScore._id,
          name: newScore.name,
          closenessScore: newScore.closenessScore,
          conflictsScore: newScore.conflictsScore
        })
      }
    }
  } catch (error) {
    console.log('Error in scorePost controller:', error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
