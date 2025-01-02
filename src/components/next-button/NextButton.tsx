import { selectUser } from "@/redux/slices/userSlice";
import {
  selectUpdateCard,
  setUpdateCard,
} from "@/redux/slices/wordsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { IconButton } from "@mui/material";
import s from "./NextButton.module.scss";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import useRandomWord from "@/hooks/words/useRandomWord";

export default function NextButton() {
  
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const { randomWord } = useRandomWord();
  const updateCard = useAppSelector(selectUpdateCard);

  const style =
    user.laterality === "right" ? { right: "30px" } : { left: "30px" };

  const handleClick = () => {
    randomWord();
    dispatch(setUpdateCard(!updateCard));
  };

  return (
    <IconButton style={style} className={s.nextButton} onClick={handleClick}>
      {user.laterality === "right" ? (
        <UndoIcon className={s.nextButton_icon} />
      ) : (
        <RedoIcon className={s.nextButton_icon} />
      )}
    </IconButton>
  );
}
