import React, { useState } from "react";
import classNames from "classnames";

import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import useStyles from "./Style";

/**
 * @author
 * @function NewCard
 **/

const NewCard = ({
  articles: { description, publishedAt, source, title, url, urlToImage },
  activeArticle,
  i,
}) => {
  const [elRefs, setElRefs] = useState([]);

  const classes = useStyles();
  return (
    <Card
      key={i}
      ref={elRefs[i]}
      className={classNames(
        classes.card,
        activeArticle === i ? classes.activeCard : null
      )}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
          title={title}
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" href={url}>
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary" component="h2">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewCard;
