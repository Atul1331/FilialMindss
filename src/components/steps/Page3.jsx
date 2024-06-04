import React, {useState, useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext';
const Page3 = () => {

  const {score, setScore} = useContext(StepperContext);
  console.log(score);

  const [question1, setQuestion1] = useState(0);
  const [question2, setQuestion2] = useState(0);
  const [question3, setQuestion3] = useState(0);
  const [question4, setQuestion4] = useState(0);

  // if(question1 !== 0 && question2 !== 0 && question3 !== 0 && question4 !== 0){
  //   setScore( question1 + question2 + question3 + question4)
  // }

  return (
    <div>
      
      <div className=" py-4">
                    <div className="q1  ">
                    <p className="text-2xl font-semibold">9.. My child reacts strongly to separation from me.</p>
                    <div className="options text-xl flex justify-between flex-wrap">
                    
                    <label className={question1 === 1?"block active py-8":"block py-8" } onClick={()=>setScore(score+1)}> <input type="radio" value="1" name="q1" /> Definitely, doesn't apply</label>
                    <label className={question1 === 2?"block active py-8":"block py-8"}  onClick={()=>setScore(score+2)}><input type="radio" value="2" name="q1" /> Not really</label>
                    <label className={question1 === 3?"block active py-8":"block py-8"} onClick={()=>setScore(score+3)} ><input type="radio" value="3" name="q1" /> Neutral, not sure</label>
                    <label className={question1 === 4?"block active py-8":"block py-8"} onClick={()=>setScore(score+4)} ><input type="radio" value="4" name="q1"/> Applies somewhat</label>
                    <label className={question1 === 5?"block active py-8":"block py-8"} onClick={()=>setScore(score+5)} ><input type="radio"  value="5" name="q1"/> Definitely applies</label>
                    </div>

                </div>
                <hr class="h-px my-2 bg-gray-200 border-0 "></hr>


                <div className="q2  ">
                    <p className="text-2xl font-semibold">10. My child spontaneously shares information about himself/herself.</p>
                    <div className="options text-xl flex justify-between flex-wrap">
                    <label className={question2 === 1?"block active py-8":"block py-8"}  onClick={()=>setScore(score + 1)}> <input type="radio" value="1" name="q2" /> Definitely, doesn't apply</label>
                    <label className={question2 === 2?"block active py-8":"block py-8"} onClick={()=>setScore(score + 2)} ><input type="radio" value="2" name="q2"  /> Not really</label>
                    <label className={question2 === 3?"block active py-8":"block py-8"} onClick={()=>setScore(score + 3)}  ><input type="radio" value="3" name="q2"  /> Neutral, not sure</label>
                    <label className={question2 === 4?"block active py-8":"block py-8"} onClick={()=>setScore(score + 4)} ><input type="radio" value="4" name="q2" /> Applies somewhat</label>
                    <label className={question2 === 5?"block active py-8":"block py-8"} onClick={()=>setScore(score + 5)} ><input type="radio" value="5" name="q2" /> Definitely applies</label>
                    </div>

                </div>
                <hr class="h-px my-2 bg-gray-200 border-0 "></hr>


                <div className="q3  ">
                    <p className="text-2xl font-semibold">11. My child is overly dependent on me.</p>
                    <div className="options text-xl flex justify-between flex-wrap">
                    <label className={question3 === 1?"block active py-8":"block py-8"}  onClick={()=>setScore(score + 1)}> <input type="radio" value="1" name="q3" /> Definitely, doesn't apply</label>
                    <label className={question3 === 2?"block active py-8":"block py-8"} onClick={()=>setScore(score + 2)} ><input type="radio" value="2" name="q3"  /> Not really</label>
                    <label className={question3 === 3?"block active py-8":"block py-8"} onClick={()=>setScore(score + 3)}  ><input type="radio" value="3" name="q3"  /> Neutral, not sure</label>
                    <label className={question3 === 4?"block active py-8":"block py-8"} onClick={()=>setScore(score + 4)} ><input type="radio" value="4" name="q3" /> Applies somewhat</label>
                    <label className={question3 === 5?"block active py-8":"block py-8"} onClick={()=>setScore(score + 5)} ><input type="radio" value="5" name="q3" /> Definitely applies</label>
                    </div>

                </div>
                <hr class="h-px my-2 bg-gray-200 border-0 "></hr>


                <div className="q4 ">
                    <p className="text-2xl font-semibold">12. My child easily becomes angry at me.</p>
                    <div className="options text-xl flex justify-between flex-wrap">
                    <label className={question4 === 1?"block active py-8":"block py-8"}  onClick={()=>setScore(score + 1)}> <input type="radio" value="1" name="q4" /> Definitely, doesn't apply</label>
                    <label className={question4 === 2?"block active py-8":"block py-8"} onClick={()=>setScore(score + 2)} ><input type="radio" value="2" name="q4"  /> Not really</label>
                    <label className={question4 === 3?"block active py-8":"block py-8"} onClick={()=>setScore(score + 3)}  ><input type="radio" value="3" name="q4"  /> Neutral, not sure</label>
                    <label className={question4 === 4?"block active py-8":"block py-8"} onClick={()=>setScore(score + 4)} ><input type="radio" value="4" name="q4" /> Applies somewhat</label>
                    <label className={question4 === 5?"block active py-8":"block py-8"} onClick={()=>setScore(score + 5)} ><input type="radio" value="5" name="q4" /> Definitely applies</label>
                    </div>

                </div>

                <hr class="h-px my-2 bg-gray-200 border-0 "></hr>
                
                    </div>
                    
    </div>
  )
}

export default Page3
