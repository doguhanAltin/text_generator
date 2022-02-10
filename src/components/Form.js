import { useEffect, useState } from "react";
import { getParagraphAsync } from "../redux/ParagraphSlice";
import { useDispatch } from "react-redux";
import "./form.css";
function Form() {
  const dispatch = useDispatch();
  const [paras, setParas] = useState(4);
  const [textForm, setTextForm] = useState("text");

  //
  useEffect(() => {
    dispatch(getParagraphAsync({ paras: paras, textForm: textForm }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getParagraphAsync({ paras: paras, textForm: textForm }));
  }, [paras, textForm]);

  //
  const handleFormChange = (e) => {
    setTextForm(e.target.value);
  };
  const handleParasChange = (e) => {
    setParas(e.target.value);
  };

  return (
    <div className="formClass">
      <div className="selectionClass">
        <label htmlFor="select">Text Format</label>
        <select onChange={(e) => handleFormChange(e)}>
          <option value="text">text</option>
          <option value="html">html</option>
        </select>
      </div>
      <div className="selectionClass">
        <label htmlFor="select">Paragraph Number</label>
        <input
          type="number"
          onChange={(e) => handleParasChange(e)}
          value={paras}
        />
      </div>
    </div>
  );
}

export default Form;
