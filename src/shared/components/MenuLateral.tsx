import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDrawerContext } from "../context";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IListemLinkProps {
  to: string;
  label: string;
  icon: string;
  onClick: (() => void) | undefined;
}
const ListItemLink: React.FC<IListemLinkProps> = ({
  to,
  label,
  icon,
  onClick,
}) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to); //resolve routas
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    onClick?.();
    navigate(to);
  };

  return (
    <ListItemButton Selection={match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>Home</Icon>
      </ListItemIcon>
      <ListItemText primary="home" />
    </ListItemButton>
  );
};

interface IMenuLateral {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down);

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          display="flex"
          height="100%"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="center"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemLink
                icon="home"
                to="/pagina-inicial"
                label="pagina inicial"
                onClick={smDown ? toggleDrawerOpen : undefined}
              />
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(29)}>
        {children}
      </Box>
    </>
  );
};
