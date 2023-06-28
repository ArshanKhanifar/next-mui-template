GCLOUD_PROJECT := arshan-rn-template
DATASET_ID := next_mui_app
TABLE_ID := blog_posts
TABLE_PATH := $(GCLOUD_PROJECT):$(DATASET_ID).$(TABLE_ID)


create-dataset:
	bq mk --dataset $(GCLOUD_PROJECT):$(DATASET_ID)


create-table:
	bq mk --table $(TABLE_PATH) title:STRING,body:STRING

SA_NAME := mui-template
SA_DESCRIPTION:= "MUI NextJS template project"

create-service-account:
	gcloud iam service-accounts create $(SA_NAME) --display-name $(SA_DESCRIPTION)

give-permissions:
	gcloud projects add-iam-policy-binding $(GCLOUD_PROJECT) \
		--member=serviceAccount:$(SA_NAME)@$(GCLOUD_PROJECT).iam.gserviceaccount.com \
		--role=roles/bigquery.dataEditor
