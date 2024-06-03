import React, {useState, useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext';
const Page1 = () => {

  const {score, setScore} = useContext(StepperContext);

  const [question1, setQuestion1] = useState(0);
  const [question2, setQuestion2] = useState(0);
  const [question3, setQuestion3] = useState(0);
  const [question4, setQuestion4] = useState(0);

  

  return (
    <div>
      
      <div className=" py-6">
                    <div className="q1  ">
                    <p className="text-2xl">1. I share an affectionate, warm relationship with my child</p>
                    <div className="options text-2xl flex justify-evenly flex-wrap">
                    
                    <label className={question1 === 1?"block active py-8":"block py-8" } onClick={()=>setScore(score + 1)}> <input type="radio" value="1" name="q1" /> Definitely, doesn't apply</label>
                    <label className={question1 === 2?"block active py-8":"block py-8"}  onClick={()=>setScore(score + 2)}><input type="radio" value="2" name="q1" /> Not really</label>
                    <label className={question1 === 3?"block active py-8":"block py-8"} onClick={()=>setScore(score + 3)} ><input type="radio" value="3" name="q1" /> Neutral, not sure</label>
                    <label className={question1 === 4?"block active py-8":"block py-8"} onClick={()=>setScore(score + 4)} ><input type="radio" value="4" name="q1"/> Applies somewhat</label>
                    <label className={question1 === 5?"block active py-8":"block py-8"} onClick={()=>setScore(score + 5)} ><input type="radio"  value="5" name="q1"/> Definitely applies</label>
                    </div>

                </div>


                <div className="q2  ">
                    <p className="text-2xl">2. My child and I always seem to be struggling with each other</p>
                    <div className="options text-2xl flex justify-evenly flex-wrap">
                    <label className={question2 === 1?"block active py-8":"block py-8"}  onClick={()=>setScore(score + 1)}> <input type="radio" value="1" name="q2" /> Definitely, doesn't apply</label>
                    <label className={question2 === 2?"block active py-8":"block py-8"} onClick={()=>setScore(score + 2)} ><input type="radio" value="2" name="q2"  /> Not really</label>
                    <label className={question2 === 3?"block active py-8":"block py-8"} onClick={()=>setScore(score + 3)}  ><input type="radio" value="3" name="q2"  /> Neutral, not sure</label>
                    <label className={question2 === 4?"block active py-8":"block py-8"} onClick={()=>setScore(score + 4)} ><input type="radio" value="4" name="q2" /> Applies somewhat</label>
                    <label className={question2 === 5?"block active py-8":"block py-8"} onClick={()=>setScore(score + 5)} ><input type="radio" value="5" name="q2" /> Definitely applies</label>
                    </div>

                </div>


                <div className="q3  ">
                    <p className="text-2xl">3. If upset, my child will seek confort from me</p>
                    <div className="options text-2xl flex justify-evenly flex-wrap">
                    <label className={question3 === 1?"block active py-8":"block py-8"}  onClick={()=>setScore(score + 1)}> <input type="radio" value="1" name="q3" /> Definitely, doesn't apply</label>
                    <label className={question3 === 2?"block active py-8":"block py-8"} onClick={()=>setScore(score + 2)} ><input type="radio" value="2" name="q3"  /> Not really</label>
                    <label className={question3 === 3?"block active py-8":"block py-8"} onClick={()=>setScore(score + 3)}  ><input type="radio" value="3" name="q3"  /> Neutral, not sure</label>
                    <label className={question3 === 4?"block active py-8":"block py-8"} onClick={()=>setScore(score + 4)} ><input type="radio" value="4" name="q3" /> Applies somewhat</label>
                    <label className={question3 === 5?"block active py-8":"block py-8"} onClick={()=>setScore(score + 5)} ><input type="radio" value="5" name="q3" /> Definitely applies</label>
                    </div>

                </div>


                <div className="q4 ">
                    <p className="text-2xl">4. My child is uncomfortable with physical attention or touch from me</p>
                    <div className="options text-2xl flex justify-evenly flex-wrap">
                    <label className={question4 === 1?"block active py-8":"block py-8"}  onClick={()=>setScore(score + 1)}> <input type="radio" value="1" name="q4" /> Definitely, doesn't apply</label>
                    <label className={question4 === 2?"block active py-8":"block py-8"} onClick={()=>setScore(score + 2)} ><input type="radio" value="2" name="q4"  /> Not really</label>
                    <label className={question4 === 3?"block active py-8":"block py-8"} onClick={()=>setScore(score + 3)}  ><input type="radio" value="3" name="q4"  /> Neutral, not sure</label>
                    <label className={question4 === 4?"block active py-8":"block py-8"} onClick={()=>setScore(score + 4)} ><input type="radio" value="4" name="q4" /> Applies somewhat</label>
                    <label className={question4 === 5?"block active py-8":"block py-8"} onClick={()=>setScore(score + 5)} ><input type="radio" value="5" name="q4" /> Definitely applies</label>
                    </div>

                </div>
                
                    </div>
                    
                    
    </div>
  )
}

export default Page1
