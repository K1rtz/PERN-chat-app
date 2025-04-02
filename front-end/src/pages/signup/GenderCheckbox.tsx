const GenderCheckbox = ({
    selectedGender,
    onCheckBoxChange,
    } : {
    selectedGender : string;
    onCheckBoxChange: (gender: "male" | "female") => void;
    }) => {
  return (
    <div className="flex mt-2">
        <div className="form-control ml-2">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}` }>
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox border-slate-900"
                checked = {selectedGender === "male"}
                onChange = {()=> onCheckBoxChange("male")} />
            </label>
        </div>
        <div className="form-control ml-5">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox border-slate-900"
                checked = {selectedGender === "female"}
                onChange = {() => onCheckBoxChange("female")} />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox