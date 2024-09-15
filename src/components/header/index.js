import React, { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";
import { useSession } from "../../routers/plataformaRouter";
import {
  HeaderComponet,
  HeaderContainer,
  HomeContainer,
  Text,
  Text2,
  TextContainer,
  Image,
  DivImagem,
} from "./styles";
import imageHeader from "../../assets/imageHeader.png";

export const Header = () => {
  const session = useSession();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (session) {
          const { data, error } = await supabase
            .from("profiles")
            .select("username")
            .eq("id", session.user.id);

          if (error) {
            return;
          }
          const userUsername = data.length > 0 ? data[0].username : null;
          setUsername(userUsername);
        }
      } catch (error) {}
    };

    fetchUserProfile();
  }, [session]);

  return (
    <HomeContainer>
      <HeaderComponet>
        <HeaderContainer>
          <TextContainer>
            <Text>{username && `Bem Vindo, ${username}!`}</Text>
            <Text2>Vamos começar o trabalho?</Text2>
          </TextContainer>

          <DivImagem>
            <Image src={imageHeader} alt="imageHeader" />
          </DivImagem>
        </HeaderContainer>
      </HeaderComponet>
    </HomeContainer>
  );
};
